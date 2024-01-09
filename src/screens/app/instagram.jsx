import React from "react";
import AccountImpressions from "../../components/instagram/accountImpressions";
import AccountReach from "../../components/instagram/accountReach";
import Followers from "../../components/instagram/followers";
import MediaComments from "../../components/instagram/mediaComments";
import MediaLikes from "../../components/instagram/mediaLikes";
import MediaEngagement from "../../components/instagram/mediaEngagement";
import MediaReach from "../../components/instagram/mediaReach";
import MediaSaves from "../../components/instagram/mediaSaves";

function Instagram() {
  return (
    <div className="flex flex-col w-full h-full p-4  bg-gray-100">
      <div className="p-10 flex items-center justify-center w-full">
        <button
          onClick={() => {
            window.FB.login(function (response) {
              if (response.authResponse) {
                console.log("Welcome!  Fetching your information.... ");
                window.FB.api("/me", function (response) {
                  console.log("Good to see you, " + response.name + ".");
                });
              } else {
                console.log("User cancelled login or did not fully authorize.");
              }
            });
          }}
        >
          Login With Instagram
        </button>
        <h1 className="text-2xl font-semibold">Instagram Anlytics</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pb-[150px]">
        <AccountImpressions />
        <AccountReach />
        <Followers />

        <MediaComments />
        <MediaEngagement />
        <MediaLikes />
        <MediaReach />
        <MediaSaves />
      </div>
    </div>
  );
}

export default Instagram;
