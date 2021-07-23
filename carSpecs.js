let carSpecs= {
    dimensions:{
        overalllength:'3,500 mm',
        overallWidth:'1,600 mm',
        overallheight:'1,490 mm',
        wheelBase:'2,360 mm',
        trackWidth:{
            front:'1,405 mm',
            rear:'1,400 mm'
        },
        minimumTurningRadius:'4.5 m',
        minimumGroundClearance:'170 mm',
    },
    capacities:{
        seatingCapacity:'5 persons',
        fuleTankCapacity:'35 litres',
    },
    engine:{
        type:'KB-Series',
        numberOfCylinders:'3',
        numberOfValves:'12',
        cpacity:'998 cc',
        boreXStroke:'73.0 x 79.5 mm',
        compressionRatio:'10:1',
        maximumPower:'67/6,200 PS/RPM',
        maximumTorque:'90/3,500 Nm/RPM',
        fuelDisrtibution:'Multipoint injection'
    },
    transmission:{
        type:'5-speed AMT'
    },
    chassis:{
        steering:'Rack & Pinion, Power assisted',
        brakes:{
            front:'Ventilated disks',
            rear:'Drums'
        },
        suspension:{
            front:'MacPherson strut & coil spring',
            rear:'Isolated trialing link & coil spring',
        },
        shockAbsorbers:'Gas filled',
        typre:'Tubeless (155/80R13)'
    },
    weights:{
        kerbWeight:'860-880 kg',
        grossWeight:'1,320 kg'
    }
}

//Examples
//To print engine capacity
console.log(carSpecs.engine.cpacity);
//To print fonrt brakes
console.log(carSpecs.chassis.brakes.front);
//To print car transmission
console.log(carSpecs.transmission.type);
//To print entire car specs
console.log(carSpecs);
