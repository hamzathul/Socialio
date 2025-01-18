import { getProfileByUsername } from "@/actions/profile.action";
import React from "react";

export async function generateMetaData({
  params,
}: {
  params: { username: string };
}) {
  const user = await getProfileByUsername(params.username);
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description:user.bio || `Checkout ${user.username}'s profile`
  };
}

const ProfilePage = ({ params }: { params: { username: string } }) => {
  // console.log(params)
  return <div>ProfilePage</div>;
};

export default ProfilePage;
