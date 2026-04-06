import useKeyboard from "../../../shared/lib/useKeyboard";
import Container from "./atoms/backContainer";
import Label from "./atoms/backLabel";
import { useLocation, useNavigate } from "react-router";
import { Keys } from "../../../shared/config/keys";
import type { BackProps } from "../model/backTypes";

export default function Back({ path }: BackProps) {
    const navigate = useNavigate();
    const { state } = useLocation();

    // Event handlers

    const goBack = () => {
        if (path) {
            navigate(path, { replace: true, state: { index: state?.index } });
        } else {
            navigate(-1);
        }
    };
    const onKeyDown = (key: string) => {
        switch (key) {
            case Keys.Back:
            case Keys.Escape:
                goBack();
                break;
        }
    };

    // Keyboard hook

    useKeyboard({ onKeyDown });

    // Render

    return (
        <Container onClick={goBack}>
            <Label>{"Back"}</Label>
        </Container>
    );
}