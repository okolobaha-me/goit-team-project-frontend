import { BtnList, BtnItem, EnterLink, RegisterLink } from "./MobLinks.styled"

const MobLinks = () => {
    return (
        <BtnList>
        <BtnItem><EnterLink to={'/signin'} variant={'transparent'}>Увійти</EnterLink></BtnItem>
        <BtnItem><RegisterLink to={'/signup'} variant={'accent'}>Реєстрація</RegisterLink></BtnItem>
       </BtnList>

    )
};

export default MobLinks;

