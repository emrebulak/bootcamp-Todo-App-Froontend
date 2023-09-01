import './Header.css';

const Header = ({title}) => {
    return (

        <div className='row'>
            <div className='col-md-12'>
                <h4>{title}</h4>
            </div>
        </div>

    )
}

export default Header;