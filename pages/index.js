import { useEffect } from 'react';
import tw from "tailwind-styled-components";
import Map from './components/Map';

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        {/* header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          
          <Profile>
            <Name>Aditi Yadav</Name>
            <UserImage src="https://yt3.ggpht.com/ytc/AAUvwngKZiSHXaxK_KhRG51t3CMOkgyrwjRG_n_EtXrb=s900-c-k-c0x00ffffff-no-rj"/>
          </Profile>
        </Header>
        {/* actionbutton */}
        <ActionButtons>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/>
            Ride
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
            Reserver
          </ActionButton>
        </ActionButtons>
        {/* input */}
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`  

const ActionItems = tw.div`
  flex-1 p-4
`
const Header = tw.div`
  flex justify-between items-center
`

const UberLogo = tw.img`
  h-28 
  `
const UserImage = tw.img`
  h-12 w-12 rounded-full border-gray-200 p-px
`

const Name = tw.div`
  mr-4 w-20 text-sm
`

const Profile = tw.div`
  flex items-center
`

const ActionButtons = tw.div`
  flex

`

const ActionButton = tw.div`
  flex bg-gray-200 flex-1 m-1 h-32 items-center justify-center flex-col rounded-lg shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 text-xl
`

const ActionButtonImage = tw.img`
 h-3/5 
`