import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from './data/products';

describe('ProductImage', () => {

    test('show component', () => {

        const wrapper = renderer.create(
            <ProductImage img="test2.png"/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
        
    });

    test('show product img from context', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
});
