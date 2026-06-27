import { create } from "zustand";

export interface Participant {
  id: string;
  name: string;
}

interface ParticipantState {
  participants: Participant[];

  addParticipant: (name: string) => void;

  removeParticipant: (id: string) => void;

  clearParticipants: () => void;
}

export const useParticipantStore =
  create<ParticipantState>((set) => ({
    participants: [],

    addParticipant: (name) =>
      set((state) => ({
        participants: [
          ...state.participants,
          {
            id: crypto.randomUUID(),
            name,
          },
        ],
      })),

    removeParticipant: (id) =>
      set((state) => ({
        participants: state.participants.filter(
          (participant) => participant.id !== id
        ),
      })),

    clearParticipants: () =>
      set({
        participants: [],
      }),
  }));
