import { useRef, useState, useCallback, useEffect } from 'react';

import { fetchUserPlaces, updateUserPlaces } from './http.js';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import ErrorPage from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isFetchingUserPlaces, setIsFetchingUserPlaces] = useState(false);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  const [error, setError] = useState(false);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setErrorUpdatingPlaces({
        message: error.message || 'Failed to update places.'
      });
      setUserPlaces(userPlaces);
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter(
        (place) => place.id !== selectedPlace.current.id
      )
    );

    try {
      await updateUserPlaces(
        userPlaces.filter(
          (place) => place.id !== selectedPlace.current.id
        )
      );
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({ message: error.message || 'Failed to delete place.'})
    }

    setModalIsOpen(false);
  }, [userPlaces]);

  function handleError() {
    setErrorUpdatingPlaces(null);
  }

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetchingUserPlaces(true);

      try {
        const userPlaces = await fetchUserPlaces();

        setUserPlaces(userPlaces);
      } catch (error) {
        setError({
          message: error.message || 'Failed to fetch your places.'
        });
      }

      setIsFetchingUserPlaces(false);
    }

    fetchPlaces();
  }, []);

  return (
    <>
      <Modal open={errorUpdatingPlaces} onClose={handleError}>
        {errorUpdatingPlaces && <ErrorPage
          title="An error ocurred!"
          message={errorUpdatingPlaces.message}
          onConfirm={handleError}
        />}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <ErrorPage title="An error ocurred!" message={error.message} />}
        {!error && <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
          isLoading={isFetchingUserPlaces}
          loadingText="Fetching your places..."
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
