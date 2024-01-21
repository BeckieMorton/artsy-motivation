import { create } from "zustand";

//store for airwork data
const useArtworkStore = create((set) => ({
  artwork: [],
  setArtwork: (newArtwork) => set({ artwork: newArtwork }),
}));

export default useArtworkStore;
