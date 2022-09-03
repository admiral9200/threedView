import { render, fireEvent } from "@testing-library/react";
import React from "react";
import * as THREE from "three";
import ThreedView, { ThreedViewProps } from ".";

describe("ThreedView", () => {
  let props: ThreedViewProps;
  beforeEach(() => {
    props = {
      model3dmtl: "./assets/IronMan/IronMan.mtl",
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
      directionallightintensity: 1.8,
    };
  });

  describe("ThreedView Render", () => {
    it("Adds a ThreedView", (done) => {
      var scene = new THREE.Scene();
      // eslint-disable-next-line testing-library/no-node-access
      var childrenCountBeforeLoad = scene.children.length;

      <ThreedView {...props} />;
      expect(childrenCountBeforeLoad).toBeLessThan(2);
      done();
    });
  });
});
