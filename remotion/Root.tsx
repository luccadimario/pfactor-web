import { Composition } from "remotion";
import { PFactorDemo } from "./compositions/PFactorDemo";
import { AppShowcase } from "./compositions/AppShowcase";

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="PFactorDemo"
                component={PFactorDemo}
                durationInFrames={780} // 26 seconds at 30fps
                fps={30}
                width={1920}
                height={1080}
            />
            <Composition
                id="AppShowcase"
                component={AppShowcase}
                durationInFrames={300} // 10 seconds at 30fps
                fps={30}
                width={1080}
                height={1920} // Vertical for social media
            />
        </>
    );
};
