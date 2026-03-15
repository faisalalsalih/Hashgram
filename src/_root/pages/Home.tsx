import { Models } from "appwrite";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Loader, PostCard, UserCard } from "@/components/shared";
import { useGetPosts, useGetUsers } from "@/lib/react-query/queriesandMutations";

const Home = () => {
  const { ref, inView } = useInView();

  // 1. Using the infinite query hook
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetPosts();

  const {
    data: creators,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);

  // 2. Trigger fetch when the bottom ref is in view
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  if (isErrorPosts || isErrorCreators) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {/* 3. Mapping through the pages stored in the queryKey area */}
              {posts?.pages.map((page, index) => (
                <li key={`page-${index}`} className="flex flex-col gap-9 w-full">
                  {page.documents.map((post: Models.Document) => (
                    <PostCard key={post.$id} post={post} />
                  ))}
                </li>
              ))}
            </ul>
          )}

          {/* 4. The "Trigger" element at the bottom */}
          {hasNextPage && (
            <div ref={ref} className="mt-10">
              <Loader />
            </div>
          )}
        </div>
      </div>

      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;