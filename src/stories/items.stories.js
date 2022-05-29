import React from "react";
import Items from "../components/Items/items";
//import Items from "../components/Dropdown/items"

export default {
    title: "Navigation",
    component: Items,
}

const navItemsLink = [
    {lable:"Home", onClick:()=> console.log('home')},
    {lable:"About", onClick:()=> console.log('home')},
    {lable:"Contact", onClick:()=> console.log('home')}
]


const ItemList = (args) => <Items {...args} />;
export const ItemOfMenu = ItemList.bind({})
ItemOfMenu.args={
    lable:navItemsLink
}