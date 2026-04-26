import type { User } from '../types/auth'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export const authAPI = {
  // Obtener usuario actual
  async getCurrentUser(): Promise<User | null> {
    try {
      const response = await fetch(`${API_URL}/api/auth/me`, {
        credentials: 'include', // Importante para enviar cookies de sesión
      });
      
      if (!response.ok) {
        return null;
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error al obtener usuario:', error);
      return null;
    }
  },

  // Iniciar login con 42
  initiateLogin() {
    window.location.href = `${API_URL}/api/auth/42`;
  },

  // Cerrar sesión
  async logout(): Promise<void> {
    try {
      await fetch(`${API_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  },
};
