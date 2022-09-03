import { Story, Meta } from '@storybook/react';
import ThreedView, {ThreedViewProps} from '../../components/ThreedView';

export default {
	title: '3DmodelExample/ThreedView',
	component: ThreedView,
} as Meta;

const Template: Story<ThreedViewProps> = (args: ThreedViewProps) => (
    <div style={{textAlign:'center'}}>
		<ThreedView {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
    model3dmtl: "./assets/IronMan/IronMan.mtl" ,
    model3dobj: "./assets/IronMan/IronMan.obj",
    near: 0.1,
    positionx3d: 0,
    positiony3d: 5,
    positionz3d: 20,
    meshpositionx: 0,
    meshpositiony: 3,
    meshpositionz: 0,
    rotationx: 0.0,
    rotationy: 0.01,
    rotationz: 0.0,
    scalex: 0.02,
    scaley: 0.02,
    scalez: 0.02,
    threedviewcanvascolor: "#263238", 
    directionallightcolor: 0xffffff,
    directionallightintensity: 1.8
};