import React, { useState } from 'react';
import Icon from '../Icon/Icon'
import "./header.scss"
import { Row, Col } from 'antd';
import { useSearchParams } from 'react-router-dom';

const Header = () => {

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
                <div className="box-menuromb__iconline iconline">
                    <Icon
                        type="menu"
                        className="iconline-icon"
                    /></div>
                <div className='box-menuromb__iconromb menuromb'>
                    <Icon
                        type="menuromb"
                        className="menuromb-icon"
                    /></div>
            </Col>
            <Col flex="3.7em" justify="center" className='header-container__menuhalf menuhalf'>
                <div className='menuhalf__icon'>
                    <Icon
                        type="menuhalf"
                        className="menuhalf-icon"
                    /></div>
            </Col>
            <Col flex="2.7em" className="header-container__menucircle menucircle">
                <div className='menucircle__icon'>
                    <Icon
                        type="menucircle"
                        className="menucircle-icon"
                    /></div>
            </Col>
            <Col flex="2.3em" className="header-container__idelete idelete">
                <div className='idelete__icon'>
                    <Icon
                        type="idelete"
                        className="idelete-icon"
                    /></div>
            </Col>
            <Col flex="2.74em" className="header-container__pencil pencil">
                <div className='pencil__icon'>
                    <Icon
                        type="pencil"
                        className="pencil-icon"
                    /></div>
            </Col>
            <Col flex="3.25em" className="header-container__padlock padlock">
                <div className='padlock__icon'>
                    <Icon
                        type="padlock"
                        className="padlock-icon"
                    /></div>
            </Col>
            <Col flex="3.17em" className="header-container__lattice lattice">
                <div className='lattice__icon'>
                    <Icon
                        type="lattice"
                        className="lattice-icon"
                    /></div>
            </Col>
            <Col flex="2.7em" className="header-container__check check">
                <div className='check__icon'>
                    <Icon
                        type="check"                       
                        className="check-icon"
                    /></div>
            </Col>
            <Col flex="2.3em" className="header-container__aa aa">
                <div className='aa__icon'>
                    <Icon
                        type="aa"
                        className="aa-icon"
                    /></div>
            </Col>
            <Col flex="6.7em">
                <div></div>
            </Col>
            <Col flex="2.2em" className='header-container__everest everest'>
                <div className='everest__icon'>
                    <Icon
                        type="everest"
                        className="everest-icon"
                    /></div>
            </Col>
            <Col flex="3.1em" className='header-container__medic medic'>
                <div className='medic__icon'>
                    <Icon
                        type="medic"
                        className="medic-icon"
                    /></div>
            </Col>
            <Col flex="2.7em" className="header-container__arrow arrow">
                <div className='arrow__icon'>
                    <Icon
                        type="arrow"
                        className="arrow-icon"
                    ></Icon></div>
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



