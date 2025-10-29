export type overview = {
  Milage: string;
  "Drive Type": string;
  Transmission: string;
  Fuel: string;
  Consumption: string;
  "Engine Cap": string;
};

export type body = {
  "Body Type": string;
  Doors: string;
  Length: string;
  Width: string;
  Height: string;
  Weight: string;
  Seats: string;
  "Front Tyres": string;
  "Rear Tyres": string;
  "Driven Wheels": string;
};

export type EnE = {
  "Fuel Type": string;
  "Fuel Average (per 100 km)": string;
  "Fuel Tank Capacity (L)": string;
  "Fuel Range (km)": string;
};

export type EnD = {
  Engine: string;
  "Engine Position": string;
  Cylinders: string;
  "Power (kW)": string;
  "Torque (Nm)": string;
  Gearshift: string;
  "CO₂ Emissions (Average) g/km": string;
  "Acceleration 0-100 km/h": string;
  "Maximum/Top Speed km/h": string;
};

export type features = {
  "Air Conditioning": string;
  "Anti-Lock Braking System (ABS)": string;
  "Aux In (Auxiliary Input)": string;
  "Bluetooth Connectivity": string;
  "Brake Assist (BAS/EBA)": string;
  "Cloth Upholstery": string;
  "Curtain Airbags": string;
  "Driver Airbag": string;
  "Electric Windows": string;
  "Electric-Adjust Mirrors": string;
  "Electronic Brake Distribution (EBD)": string;
  "Folding Rear Seat": string;
  "Front Fog Lamps/Lights": string;
  "Front Passenger Airbag": string;
  "Front Side Airbags": string;
  "Isofix Child Seat Mountings": string;
  "Multi-Function Steering Wheel Controls": string;
  "On-Board Computer / Multi-Information Display": string;
  "Remote Central Locking": string;
  "Service Plan": string;
  "Split Rear Seat": string;
  "Stability Control": string;
  "Traction Control": string;
  "USB Port": string;
  "Child-Proof/Safety Lock": string;
  "Headlight Level/Range/Height Adjustment": string;
  "Rear Fog Lamps / Lights": string;
  "Spare-Wheel Size": string;
};

export type specificationType = [body, EnD, EnE, features];

export type carSpecifications = (body | EnD | EnE | features)
