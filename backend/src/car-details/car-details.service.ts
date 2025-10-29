import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Optional } from 'sequelize';
import { NullishPropertiesOf } from 'sequelize/lib/utils';
import { Body } from 'src/models/car-info/body.model';
import { CarInfo } from 'src/models/car-info/car-info.model';
import { EnD } from 'src/models/car-info/EnD.model';
import { EnE } from 'src/models/car-info/EnE.model';
import { Features } from 'src/models/car-info/features.model';
import { Overview } from 'src/models/car-info/overview.model';

@Injectable()
export class CarDetailsService {
  constructor(
    @InjectModel(CarInfo)
    private readonly carInfoModel: typeof CarInfo,
  ) {}

  async getAllCarDetails() {
    return await this.carInfoModel.findAll({
      include: [Overview, Body, EnD, EnE, Features],
    });
  }

  async getCarDetails(id: string) {
    const car = await this.carInfoModel.findByPk(id, {
      include: [Overview, Body, EnD, EnE, Features],
    });
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
    console.log(car.dataValues.carBrand, car.dataValues.carRange);
    if (!car.dataValues.carBrand || !car.dataValues.carRange) {
      throw new NotFoundException(`Car with ID ${id} has incomplete details`);
    }
    return car;
  }

  async createCarDetail() {
    return await this.carInfoModel.create(
      {
        carCondition: 'Used Car',
        carLaunchYear: '2022',
        carBrand: 'Toyota',
        carRange: 'Premium',
        carModel: 'Model X',
        carColor: 'Red',
        carPrice: '2000000',
        carPrePrice: '2200000',
        carEMI: '300',
        carDescription: 'This is a sample car description.',
        carImagesUrl: [
          'http://example.com/image1.jpg',
          'http://example.com/image2.jpg',
        ],
        carOverview: {
          Milage: '15000 km',
          'Drive Type': 'FWD',
          Transmission: 'Automatic',
          Fuel: 'Petrol',
          Consumption: '15 km/l',
          'Engine Cap': '2000 cc',
        },
        body: {
          'Body Type': 'Sedan',
          Doors: '4',
          Length: '4.5 m',
          Width: '1.8 m',
          Height: '1.4 m',
          Weight: '1500 kg',
          Seats: '5',
          'Front Tyres': '205/55 R16',
          'Rear Tyres': '205/55 R16',
          'Driven Wheels': 'Front',
        },
        EnD: {
          Engine: 'V6',
          'Engine Position': 'Front',
          Cylinders: '6',
          'Power (kW)': '250 HP',
          'Torque (Nm)': '320 Nm',
          Gearshift: '6-speed Automatic',
          'CO₂ Emissions (Average) g/km': '180 g/km',
          'Acceleration 0-100 km/h': '7.5 sec (0-100 km/h)',
          'Maximum/Top Speed km/h': '240 km/h',
        },
        EnE: {
          'Fuel Type': 'Petrol',
          'Fuel Average (per 100 km)': '15 km/l',
          'Fuel Tank Capacity (L)': '50 liters',
          'Fuel Range (km)': '750 km',
        },
        features: {
          'Air Conditioning': 'true',
          'Anti-Lock Braking System (ABS)': 'true',
          'Aux In (Auxiliary Input)': 'true',
          'Bluetooth Connectivity': 'true',
          'Brake Assist (BAS/EBA)': 'true',
          'Cloth Upholstery': 'true',
          'Curtain Airbags': 'true',
          'Driver Airbag': 'true',
          'Electric Windows': 'true',
          'Electric-Adjust Mirrors': 'true',
          'Electronic Brake Distribution (EBD)': 'true',
          'Folding Rear Seat': 'true',
          'Front Fog Lamps/Lights': 'true',
          'Front Passenger Airbag': 'true',
          'Front Side Airbags': 'true',
          'Isofix Child Seat Mountings': 'true',
          'Multi-Function Steering Wheel Controls': 'true',
          'On-Board Computer / Multi-Information Display': 'true',
          'Remote Central Locking': 'true',
          'Service Plan': 'true',
          'Split Rear Seat': 'true',
          'Stability Control': 'true',
          'Traction Control': 'true',
          'USB Port': 'true',
          'Child-Proof/Safety Lock': 'true',
          'Headlight Level/Range/Height Adjustment': 'true',
          'Rear Fog Lamps / Lights': 'true',
          'Spare-Wheel Size': 'Full Size',
        },
      } as Optional<CarInfo, NullishPropertiesOf<CarInfo>> | undefined,
      { include: [Overview, Body, EnD, EnE, Features] },
    );
  }

  async getSimilarCars(id: string) {
    const car = await this.getCarDetails(id);

    const similarCars = await this.carInfoModel.findAll({
      where: {
        carBrand: car.dataValues.carBrand,
        carRange: car.dataValues.carRange,
      },
      include: [Overview, Body, EnD, EnE, Features],
    });

    const filteredSimilarCars = similarCars.filter(
      (c) => c.dataValues.id !== id,
    );
    return filteredSimilarCars;
  }
}
