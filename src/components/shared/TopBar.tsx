import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queriesandMutations";
import { useQueryClient } from "@tanstack/react-query";
import Logo from "./Logo";

const Topbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isSuccess){

      queryClient.clear();

      setUser({
        id: "",
        name: "",
        username: "",
        email: "",
        imageUrl: "",
        bio: "",
      });

      navigate("/sign-up");

    };
  }, [isSuccess, queryClient, navigate, setUser]);

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">

        <Link to="/" className="flex gap-3 items-center">
          <Logo image="w-10 h-10 max-sm:w-8 max-sm:h-8 max-sm:-mb-5 max-[400px]:w-7 max-[400px]:h-7 max-[310px]:-mr-2" paragraph="max-sm:text-2xl max-sm:-mb-5 max-[400px]:w-7 max-[400px]:h-7 max-[310px]:-mr-2"/>
        </Link>

        <div className="flex gap-4">

          <Button
            variant="ghost"
            className="shad-button_ghost group"
            onClick={() => signOut()}>
            <img src="/assets/icons/logout.svg" alt="logout" className="transition duration-300  group-hover:invert group-hover:sepia group-hover:hue-rotate-330 group-hover:saturate-500 group-hover:brightness-110"/>
          </Button>

          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Topbar;