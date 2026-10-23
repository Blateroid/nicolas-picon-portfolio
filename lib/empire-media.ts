type EmpirePhoto = { src: string; alt: string; caption: string };
type EmpireGallery = { chapter: string; title: string; photos: EmpirePhoto[] };
const photo = (name: string, alt: string, caption: string): EmpirePhoto => ({ src: `/experience/empire/${name}`, alt, caption });

export const empireGalleries: EmpireGallery[] = [
  { chapter: 'engineering', title: 'At the workbench', photos: [
    photo('img_6049.jpg', 'Circuit board and colored wiring inside an open handheld device.', 'Inside the handheld device.'),
    photo('img_5493.jpg', 'Arduino board, relays, tubing, and a pump mounted inside a blue enclosure.', 'An electronics and pump assembly on the workbench.'),
    photo('img_0062.jpg', 'Open industrial control cabinet with controllers, network connections, and organized wiring.', 'The controls behind the production equipment.'),
  ] },
  { chapter: 'operations', title: 'Inside production', photos: [
    photo('img_1088.jpg', 'Conveyor and enclosed production equipment in a room at Empire.', 'A view of the production line.'),
    photo('73d65f99-dffb-41cf-8f84-5e167ccd5979.jpg', 'Plastic spin-welding machine on a stainless steel worktable.', 'The spin-welding workstation.'),
    photo('img_9597.jpg', 'Hopper and circular feeder beside enclosed production machinery under yellow lighting.', 'Feeding components into the line.'),
    photo('img_9605.jpg', 'FANUC robots positioned over a production conveyor.', 'Robotics along the production line.'),
    photo('img_8397.jpg', 'Close view of a machine assembly with pneumatic tubing, cables, and an industrial connection block.', 'A closer look at the machine connections.'),
    photo('img_9240.jpg', 'Pneumatic gripper positioned above fixtures on a conveyor.', 'A gripper and fixtures on the line.'),
    photo('img_9954.jpg', 'Conveyor fixtures in front of a circular machine station and pneumatic equipment.', 'The conveyor and machine stations.'),
    photo('img_9606.jpg', 'Labeling equipment and a control panel beside a conveyor and collection bin.', 'The labeling and collection area.'),
    photo('img_3863.jpg', 'Boxes of ATP test swabs stacked on a pallet near refrigeration units.', 'Packed test swabs marked for refrigerated storage.'),
  ] },
  { chapter: 'product', title: 'The product and its presentation', photos: [
    photo('photo-output.png', 'ATP Complete 2 test swab with a blue tip assembly and red band.', 'The ATP Complete 2 test swab.'),
    photo('fc56e017-1c98-41c6-8378-5c73b6134502.jpg', 'Handheld ATP Complete 2 device showing test groups in an image-based interface.', 'Test groups on the handheld interface.'),
    photo('aae9266e-5ad2-40d2-8d96-a9b69ddf36fa.jpg', 'Trade-show booth with Ruhof branding, product displays, and an ATP Complete 2 software screen.', 'ATP Complete 2 on display at a trade show.'),
  ] },
  { chapter: 'team', title: 'People and day-to-day life', photos: [
    photo('6dbfb653-edc3-4407-8303-bc9e0c45cf28.jpg', 'Empire colleagues posing together in lab coats and hair coverings in a production room.', 'With the team in production.'),
    photo('img_6573.jpg', 'Colleagues in lab coats, masks, and gloves holding a bag of assembled swabs.', 'A team photo with assembled swabs.'),
    photo('29a417d0-320a-4493-88bb-30dec951a3b7.jpg', 'Empire colleagues gathered behind a decorated table with a birthday cake.', 'A birthday celebration with colleagues.'),
    photo('img_6421.jpg', 'Office desk with a computer, notebook, keyboard, and blue chair.', 'A workspace at Empire.'),
  ] },
];

export const empireVideo = {
  src: '/experience/empire/product-demonstration.mp4',
  poster: '/experience/empire/product-demonstration-poster.jpg',
  title: 'Product demonstration at Empire',
  description: 'A recorded demonstration of the handheld device, test swab, and connected software, showing the physical product alongside its screen-based workflow.',
  durationSeconds: 424.6433333333333,
};
