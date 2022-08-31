import React from 'react';
import renderer from 'react-test-renderer'
import {ProductCard, ProductTitle} from '../../src/components'
import { product1 } from './data/products';

describe('ProductTitle', () => {

    test('show component', () => {

        const wrapper = renderer.create(
            <ProductTitle title="Custom Product"/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
        
    });

    test('show product title from context', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
});
