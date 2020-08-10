import React from 'react';
import { shallow, mount } from 'enzyme';
import {Modal} from '../../components/Modal';
import expect from 'expect';
import 'jsdom-global/register';


describe('Modal disable', () => {
    const Wrapper = shallow(<Modal>children</Modal>)
    let ModalStyle = Wrapper.get(0)
    console.log(ModalStyle)
    //expect(containerStyle).to.have.property('opacity', '1');
}







