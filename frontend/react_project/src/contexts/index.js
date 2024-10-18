import { PlayersProvider, PlayersContext } from './PlayersContext';
import { WolvesProvider, WolvesContext } from './WolvesContext';
import { TalkTimeProvider, TalkTimeContext } from './TalkTimeContext';
import { StepUpProvider, StepUpContext } from './StepUpContext';
import { PlayerNamesProvider, PlayerNamesContext } from './PlayerNamesContext';


export const providers = [
    PlayerNamesProvider,
    TalkTimeProvider,
    WolvesProvider,
    PlayersProvider,
    StepUpProvider,
];

export {
    PlayersContext,
    WolvesContext,
    TalkTimeContext,
    StepUpContext,
    PlayerNamesContext,
};