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
            Ride
          </ActionButton>
          <ActionButton>
            Wheels
          </ActionButton>
          <ActionButton>
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
  flex justify-between
`

const ActionButton = tw.div``