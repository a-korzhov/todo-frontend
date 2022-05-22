import DefaultAvatar from "../assets/images/default-avatar.png";

export const dataToJpg = (imageData) => {
    return !imageData ? DefaultAvatar : `data:image/jpg;base64,${imageData}`;
};
