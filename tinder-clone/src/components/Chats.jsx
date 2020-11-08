import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Diana"
        message="Hi! how are you?"
        timestamp="35 minutes ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MjcwNDkxNjYz/hilary-duff-17191546-1-402.jpg"
      />
      <Chat
        name="Hilary Duff"
        message="Hi! how are you?"
        timestamp="35 minutes ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MjcwNDkxNjYz/hilary-duff-17191546-1-402.jpg"
      />
      <Chat
        name="vinay"
        message="Hi! how are you?"
        timestamp="35 minutes ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQzMzAxMjk3OTQ3Mjg5MTYw/diana_gettyimages-515185764jpg.jpg"
      />
      <Chat
        name="vinay"
        message="Hi! how are you?"
        timestamp="35 minutes ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQzMzAxMjk3OTQ3Mjg5MTYw/diana_gettyimages-515185764jpg.jpg"
      />
    </div>
  );
}

export default Chats;
