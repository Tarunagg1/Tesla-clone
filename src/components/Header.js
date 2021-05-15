import React,{useState} from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export default function Header() {
    const [burgur, setBurgur] = useState(false);

    const handelBurgur = ()=>{
        if(burgur){
            setBurgur(false);
        }else{
            setBurgur(true);
        }
    }

    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="image" />
            </a>
            <Menu>
                <a href="#">Modal</a>
                <a href="#">Modal s</a>
                <a href="#">Modal Y</a>
                <a href="#">Modal 3</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Teshla Account</a>
                <CustomMenu onClick={handelBurgur} />
            </RightMenu>
            <BurgurNav show={burgur}>
                <CloseWrapper>
                    <CustomClose onClick={handelBurgur} />
                </CloseWrapper>
                <li>
                    <a href="#">Existing inventory</a>
                </li>
                <li>
                    <a href="#">Existing inventory</a>
                </li> <li>
                    <a href="#">Existing inventory</a>
                </li> <li>
                    <a href="#">Existing inventory</a>
                </li> <li>
                    <a href="#">Existing inventory</a>
                </li> <li>
                    <a href="#">Existing inventory</a>
                </li> <li>
                    <a href="#">Existing inventory</a>
                </li> <li>
                    <a href="#">Existing inventory</a>
                </li> <li>
                    <a href="#">Existing inventory</a>
                </li> <li>
                    <a href="#">Existing inventory</a>
                </li>
            </BurgurNav>
        </Container>
    )
}

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding:0 20px;
    justify-content:space-between;
    top:0;
    left:0;
    right:0;
`;

const Menu = styled.div`
    display:flex;
    align-items:center;
    flex:1;
    justify-content:center;
    align-items:center;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
    }
    @media(max-width:760px){
        display:none;
    }
`;

const RightMenu = styled.div`
    a{
        font-weight:600;
        text-transform:uppercase;
        margin-right:10px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    display:flex;
    align-items:center;
    cursor: pointer;
`;

const BurgurNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:100;
    list-style:none;
    padding:20px;
    display:flex;
    text-align:start;
    flex-direction:column;
    transform:${props => (props.show) ? 'translateX(0)' : 'translateX(100%)' };
    transition:transform 0.2s ease-in;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,.2);
        a{
            font-weight:600;
        }  
    }
`;

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;