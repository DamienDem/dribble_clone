import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Assurez-vous d'avoir installé cette dépendance
import Modal from '@/components/Modal';

// Mock useRouter pour simuler le routage
jest.mock('next/router', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
  }));
  
  describe('Modal Component', () => {
    test('le modal se ferme lorsqu\'on clique sur le bouton de fermeture', () => {
      const { getByAltText } = render(<Modal><div>Contenu du modal</div></Modal>);
      fireEvent.click(getByAltText('close'));
      expect(document.querySelector('.modal')).not.toBeInTheDocument();
    });
  
    test('le modal se ferme lorsqu\'on clique en dehors de la zone du modal', () => {
      const { getByTestId } = render(<div data-testid="outside"><Modal><div>Contenu du modal</div></Modal></div>);
      fireEvent.click(getByTestId('outside'));
      expect(document.querySelector('.modal')).not.toBeInTheDocument();
    });
  
    test('le modal ne se ferme pas lorsqu\'on clique à l\'intérieur de la zone du modal', () => {
      const { getByTestId } = render(<Modal><div data-testid="inside">Contenu du modal</div></Modal>);
      fireEvent.click(getByTestId('inside'));
      expect(document.querySelector('.modal')).toBeInTheDocument();
    });
  
    test('le routage vers la page d\'accueil se produit lorsque le modal se ferme', () => {
      const { getByAltText } = render(<Modal><div>Contenu du modal</div></Modal>);
      fireEvent.click(getByAltText('close'));
      expect(require('next/router').useRouter().push).toHaveBeenCalledWith('/');
    });
  });