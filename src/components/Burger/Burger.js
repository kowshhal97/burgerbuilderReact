import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import Aux from '../../hoc/Aux'

const burger=()=> (
    <Aux>
    <BurgerIngredient type="bread-top"/>
    <BurgerIngredient type="salad"/>
    <BurgerIngredient type="cheese"/>
    <BurgerIngredient type="meat"/>
    <BurgerIngredient type="bread-bottom"/>
    </Aux>);

export default burger;