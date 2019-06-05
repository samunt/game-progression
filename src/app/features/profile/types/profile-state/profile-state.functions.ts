import { createDefaultLoadableState } from "../../../../types/loadable";
import { ProfileState } from "./profile-state.interface";

export function createProfileState(): ProfileState {
    return {
        ...createDefaultLoadableState(),
        profile: null
    };
}
