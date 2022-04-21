import React, { useState } from 'react';
import Icon from '../Icon/Icon'
import "./header.scss"
import { Row, Col } from 'antd';
import { useSearchParams } from 'react-router-dom';

const Header = (props) => {

    const { isOpenModalNote } = props;
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('card') || '';
    const [search, setSearch] = useState(postQuery);

    const handleSubmit = (e) => {
        e.preventDefault()
        const query = search;
        setSearchParams({ card: query })
    }

    return (
        <Row className='header-container' >
            <Col flex="4.6em" className="header-container__icon-container icon" >
                <Icon type="circle" color="#f0675d" />
                <Icon type="circle" color="#f7be4d" className="icon__red" />
                <Icon type="circle" color="#5ccc50" />
            </Col>
            <Col flex="4em" justify="center" className="header-container__box-menuromb box-menuromb">
                <div className='box-menuromb__iconline'><Icon type="menu" stroke="white" /></div>
                <div className='box-menuromb__iconromb'><Icon type="menuromb" color="#d7d7d7" stroke="#454543" /></div>
            </Col>
            <Col flex="3.7em" justify="center" className='header-container__menuhalf menuhalf'>
                <div className='menuhalf__icon'><Icon type="menuhalf" color="#d7d7d7" stroke="#454543" /></div>
            </Col>
            <Col flex="2.7em" className="header-container__menucircle menucircle">
                <div className='menucircle__icon'><Icon type="menucircle" color="#d7d7d7" stroke="#454543" /></div>
            </Col>
            <Col flex="2.3em" className="header-container__idelete idelete">
                <div className='idelete__icon'><Icon type="idelete" color="#d7d7d7" stroke="#454543" /></div>
            </Col>
            <Col flex="2.74em" className="header-container__pencil pencil">
                <div className='pencil__icon' onClick={isOpenModalNote}><Icon type="pencil" color="#d7d7d7" stroke="#454543" /></div>
            </Col>
            <Col flex="3.25em" className="header-container__padlock padlock">
                <div className='padlock__icon'><Icon type="padlock" color="#d7d7d7" stroke="#454543" /></div>
            </Col>
            <Col flex="3.17em" className="header-container__lattice lattice">
                <div className='lattice__icon'><Icon type="lattice" color="#d7d7d7" stroke="#454543" /></div>
            </Col>
            <Col flex="2.7em" className="header-container__check check">
                <div className='check__icon'><Icon type="check" color="#d7d7d7" stroke="#454543" /></div>
            </Col>
            <Col flex="2.3em" className="header-container__aa aa">
                <div className='aa__icon'><Icon type="aa" color="#454543" stroke="white" /></div>
            </Col>
            <Col flex="6.7em">
                <div></div>
            </Col>
            <Col flex="2.2em" className='header-container__everest everest'>
                <div className='everest__icon'><Icon type="everest" color="#d7d7d7" stroke="#454543" /></div>
            </Col>
            <Col flex="3.1em" className='header-container__medic medic'>
                <div className='medic__icon'><Icon type="medic" color="#d7d7d7" stroke="#454543" /></div>
            </Col>
            <Col flex="2.7em" className="header-container__arrow arrow">
                <div className='arrow__icon'><Icon type="arrow" color="#d7d7d7" stroke="#454543" ></Icon></div>
            </Col>
            <Col flex="12.35em" className="header-container__search search">
                <div className='search__icon'>
                        <Icon 
                        type="submit" 
                        color="#d7d7d7" 
                        stroke="#454543" 
                        onClick={handleSubmit} 
                        className="search__iconsearch"
                        />
                        <input
                            type="search"
                            className='search__inputsearch'
                            name="search"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search note"
                        />
                </div>
            </Col>
        </Row>

    );
};

export default Header;



