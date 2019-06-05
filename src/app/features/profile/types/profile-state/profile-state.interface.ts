import { Loadable} from "../../../../types/loadable";
import {Profile} from "../profile";

export interface ProfileState extends Loadable {
    profile: Profile;
}
