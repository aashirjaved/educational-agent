import { React, useState, useEffect } from 'react';
import { moduleService } from '../../Services/api'
import { Box, Tab, Tabs } from 'grommet';
import { Evaluator } from '../Maths';
export const Modules = () => {
    const [modules, selectedModules] = useState([]);
    const [index, setIndex] = useState(0);
    const onActive = (nextIndex) => setIndex(nextIndex);

    useEffect(() => {        
        moduleService.getAll().then(data => {
            selectedModules(data.data)
        })
    }, [])

    return (
        <div>
        <Tabs activeIndex={index} onActive={onActive} justify="start">
            {
                modules.length && modules.map((module) => (
                    <Tab title={module.name}>
                        <Box margin="large" gap="large">
                            <Evaluator type={module.name}/>
                        </Box>
                     </Tab>
                    ))
            }
        </Tabs>
        </div>
    )

}