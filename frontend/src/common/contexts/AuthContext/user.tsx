import axios, { AxiosResponse } from "axios";
import { IUser, Role } from "./types";

interface getUserProfileProp {
  token: string;
}
export const getUserProfile = async (
  props: getUserProfileProp
): Promise<IUser | null> => {
  const { token } = props;
  return {
    name: token,
    userId: "1",
    role: Role.student
  };
  let res: AxiosResponse;
  try {
    res = await axios.get("/auth/me");
    // apiClient.get<UserDTO>("/auth/me");
  } catch (err) {
    return null;
  }

  const user = transformUserDTOtoIUser(res.data);
  return user;
};
function transformUserDTOtoIUser(user: UserDTO) {
  return {
    name: user.name,
    userId: String(user.id),
    role: user.role == DTORole.STUDENT ? Role.student : Role.instructor
  };
}
export interface UserDTO {
  name: string;
  id: Number;
  role: DTORole;
}
enum DTORole {
  STUDENT,
  TEACHER,
  ADMIN
}
