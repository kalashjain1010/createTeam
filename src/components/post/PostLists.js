import { Box ,Text} from "@chakra-ui/react";
import React from "react";
import Post from "./index";

function PostLists({ posts }) {
  return (
    <Box px={"4"}>
      {posts?.length === 0
        ? <Text textAlign={"center"} fontSize={"xl"} >No posts yet</Text>
        : posts?.map((post) => <Post key={post.id} post={post} />)}
    </Box>
  );
}

export default PostLists;
