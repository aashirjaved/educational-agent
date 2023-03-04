import React from 'react'
import { Sidebar, Button, Avatar, Box, Nav } from 'grommet'
import { Projects, Clock, Help, Robot, Redhat,Plug, PieChart, PiedPiper, Navigate, Money } from 'grommet-icons'
import { Topics } from './Topics'
import { robot } from './robot'
export const Main = () => (

    <Box
        direction="row"
        pad="full"
    >
        <Box pad="small" > 
        <Sidebar background="brand" round="small"
        header={
            <Avatar background="brand">
                <Robot color='text-strong'/>
            </Avatar>
        }
        footer={
            <Button icon={<Help />} hoverIndicator />
        }
    >
    <Nav gap="small">
        <Button icon={<Projects />} hoverIndicator />
        <Button icon={<Clock />} hoverIndicator />
        <Button icon={<Redhat />} hoverIndicator />
        <Button icon={<Plug />} hoverIndicator />
        <Button icon={<PieChart />} hoverIndicator />
        <Button icon={<PiedPiper />} hoverIndicator />
        <Button icon={<Navigate />} hoverIndicator />
        <Button icon={<Money />} hoverIndicator />
    </Nav>
    </Sidebar>
        </Box>
        <Box pad="full"> 
        <Topics/>
        </Box>
    </Box>

   
)