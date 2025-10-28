import { Injectable } from '@nestjs/common';
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
    return await this.carInfoModel.findByPk(id, {
      include: [Overview, Body, EnD, EnE, Features],
    });
  }

  createCarDetail() {
    return this.carInfoModel.create(
      {
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
          DriveType: 'FWD',
          Transmission: 'Automatic',
          Fuel: 'Petrol',
          Consumption: '15 km/l',
          EngineCap: '2000 cc',
        },
        body: {
          BodyType: 'Sedan',
          Doors: '4',
          Length: '4.5 m',
          Width: '1.8 m',
          Height: '1.4 m',
          Weight: '1500 kg',
          Seats: '5',
          FrontTyres: '205/55 R16',
          RearTyres: '205/55 R16',
          DrivenWheels: 'Front',
        },
        EnD: {
          Engine: 'V6',
          EnginePosition: 'Front',
          Cylinders: '6',
          Power: '250 HP',
          Torque: '320 Nm',
          Gearshift: '6-speed Automatic',
          Emissions: '180 g/km',
          Acceleration: '7.5 sec (0-100 km/h)',
          MaximumSpeed: '240 km/h',
        },
        EnE: {
          FuelType: 'Petrol',
          FuelAverage: '15 km/l',
          FuelTankCapacity: '50 liters',
          FuelRange: '750 km',
        },
        features: {
          AC: 'true',
          ABS: 'true',
          AuxIn: 'true',
          BC: 'true',
          'BAS-EBA': 'true',
          ClothUpholstery: 'true',
          CurtainAirbags: 'true',
          DriverAirbag: 'true',
          ElectricWindows: 'true',
          EAM: 'true',
          EBD: 'true',
          FRS: 'true',
          FFL: 'true',
          FPassA: 'true',
          FSideA: 'true',
          ICSM: 'true',
          MFSWC: 'true',
          OnBoardComputer: 'true',
          RCL: 'true',
          ServicePlan: 'true',
          SplitRearSeat: 'true',
          StabilityControl: 'true',
          TractionControl: 'true',
          USBPort: 'true',
          ChildProof: 'true',
          HeadlightLevel: 'true',
          RearFogLamps: 'true',
          SpareWheelSize: 'Full Size',
        },
      } as Optional<CarInfo, NullishPropertiesOf<CarInfo>> | undefined,
      { include: [Overview, Body, EnD, EnE, Features] },
    );
  }
}
