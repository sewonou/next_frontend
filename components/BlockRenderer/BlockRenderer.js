import  { Cover } from 'components/Cover';
import { Heading } from 'components/Heading';
import { Paragraph } from "../Paragraph/Paragraph";

export const BlockRenderer = ({ blocks }) => {
    return blocks.map(block => {
        switch( block.name ){
            case 'core/paragraph' : {
                return (
                  <Paragraph
                    key={block.id}

                  />
                );
            }
            case 'core/cover' : {
                console.log("BLOCK", block);
                return (
                  <Cover key={block.id} background={block.attributes.url}>
                    <BlockRenderer blocks={block.innerBlocks} key={block.id} />
                </Cover>
                );
            }
            case 'core/heading' : {
                return(
                  <Heading
                    key={block.id}
                    textAlign={block.attributes.textAlign}
                    content={block.attributes.content}
                    level={block.attributes.level}
                    color = {block.attributes.textColor}
                  />

                );
            }
            default:
                return null;
        }
    })
}