import { useState } from "react";

const useButtonToggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleButton = () => {
        setIsToggled(!isToggled);
    };

    return [isToggled, toggleButton];
};

export default useButtonToggle;
