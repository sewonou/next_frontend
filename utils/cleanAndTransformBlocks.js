import {v4 as uuid } from 'uuid';
export const cleanAndTransformBlocks = (blocksJSON) =>{
    const blocks = JSON.parse(JSON.stringify(blocksJSON));

    const assignIds = (b) => {
        if (!Array.isArray(b)) return;
        b.forEach(block => {
            block.id = uuid();
            if(block.innerBlocks?.length ){
                assignIds(blocks.innerBlocks);
            }
        });
    };

    assignIds(blocks);

    return blocks ;

}