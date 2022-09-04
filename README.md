<!-- markdownlint-disable-next-line -->
<p align="center">
  <img width="150" src="https://res.cloudinary.com/lastshop802/image/upload/v1662288637/logoSheroz_w9anft.png" alt="MUI logo">
</p>

<h1 align="center">lastcode802</h1>
  <img src="https://res.cloudinary.com/lastshop802/image/upload/v1662310815/LibraryGF_wjl8xb.gif" alt="MUI logo">

# Lastcode802 Present 3d Model View

This library render a 3d model View on React.js and Next.js

## Description
This library or package is all about rendering your 3D models in way, So you can manage or get preview of your 3D models and play with them. 

#
## Available Code

```jsx
import * as React from 'react';
import { ThreedView } from "@lastcode802/threedview";

function App() {
  return (
    <ThreedView
      model3dmtl="./assets/IronMan/IronMan.mtl"
      model3dobj="./assets/IronMan/IronMan.obj"
      near={0.1}
      positionx3d={0}
      positiony3d={5}
      positionz3d={20}
      meshpositionx={0}
      meshpositiony={3}
      meshpositionz={0}
      rotationx={0.0}
      rotationy={0.01}
      rotationz={0.0}
      scalex={0.02}
      scaley={0.02}
      scalez={0.02}
      threedviewcanvascolor="#263238"
      directionallightcolor={0xffffff}
      directionallightintensity={1.8}
    />
  );
}

export default App;
```
In the interactive demo below, try changing the props and see how it affects the storybook output.

[<img src="https://iconape.com/wp-content/files/qa/371510/svg/371510.svg" width="40"/>](https://lastcode802.github.io/threedview/)

Download default 3d model use in library.

[<img src="https://cdn.worldvectorlogo.com/logos/google-drive.svg" width="40"/>](https://drive.google.com/file/d/1wpWWuF1tMPXOKk3Su2xi_oKRxrTxFYNq/view?usp=sharing)

## Document
#
## Props
			
|     prop      |      type     |     default   |   example     |
| ------------- | ------------- | ------------- | ------------- |
|  model3dmtl*  | string  | ./assets/IronMan/IronMan.mtl  | assests must be in the public folder  |
| model3dobj*   | string  | ./assets/IronMan/IronMan.obj  | assests must be in the public folder  |
|  near*        | number  |0.1  | 0.1-(-10)-1000 |
| positionx3d*  | number  | 3  | 350-(-800000)  |
|  positiony3d* | number  | 5  | 30-(-800000)  |
| positionz3d*  | number  | 20  |20-(-800000)  |
| meshpositionx*| number  | 0  | 0 |
| meshpositiony*| number  | 3  | 0 |
| meshpositionz*| number  | 0  | 0 |
| rotationx*    | number  | 0  |  0-0.001|
|  rotationy*   | number  | 0.01  | 0-0.01   |
| rotationz*    | number  | 0  | 0-0.001  |
|  scalex*      | number  | 0  | (0.1-0.9,0.01-0.0.9,0.0001-0.0009) |
|  scaley*      | number  | 0.02  |  (0.1-0.9,0.01-0.0.9,0.0001-0.0009) |
|  scalez*      | number  | 0.02  |  (0.1-0.9,0.01-0.0.9,0.0001-0.0009) |
| threedviewcanvascolor*  | THREE.ColorRepresentation  | white  | Accepts hash vale,rgb and name of the color  |
|  directionallightcolor*  | number | 16777215  | Accepts hash vale,rgb and name of the color  |
| directionallightintensity*  | number  | 1.8  | 0-255  |


<hr></hr>
<h1>Find & contact me</h1>
<p><a href="https://www.linkedin.com/company/lastcode/"><img alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> <a href="mailto:lastcode802@gmail.com"><img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a> <a href="https://www.facebook.com/profile.php?id=100067627036290"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" /></a> <a href="https://www.instagram.com/lastcode802/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=Instagram&logoColor=white" /></a>   <a href="https://chat.whatsapp.com/HDazjAi7if29K9FaRcCy5Y"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" /></a> <a href="https://github.com/orgs/lastcode802/repositories" target="_blank"><img alt="Github" src="https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=Github&logoColor=white" /></a>
</p>
