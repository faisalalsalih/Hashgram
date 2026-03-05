import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let title = "Hashgram";

    switch (true) {
      case location.pathname === "/":
        title = "Hashgram - Home";
        break;
      case location.pathname.startsWith("/explore"):
        title = "Hashgram - Explore";
        break;
      case location.pathname.startsWith("/saved"):
        title = "Hashgram - Saved";
        break;
      case location.pathname.startsWith("/all-users"):
        title = "Hashgram - All Users";
        break;
      case location.pathname.startsWith("/create-post"):
        title = "Hashgram - Create Post";
        break;
      case location.pathname.startsWith("/update-post"):
        title = "Hashgram - Edit Post";
        break;
      case location.pathname.startsWith("/posts"):
        title = "Hashgram - Post Details";
        break;
      case location.pathname.startsWith("/profile"):
        title = "Hashgram - Profile";
        break;
      case location.pathname.startsWith("/update-profile"):
        title = "Hashgram - Update Profile";
        break;
      case location.pathname.startsWith("/sign-in"):
        title = "Hashgram - Sign In";
        break;
      case location.pathname.startsWith("/sign-up"):
        title = "Hashgram - Sign Up";
        break;
      default:
        title = "Hashgram";
    }

    document.title = title;
  }, [location]);
};

export default usePageTitle;