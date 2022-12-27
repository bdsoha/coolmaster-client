import { Mode, Speed, Temperature } from '../types'

export default [
    {
        uid: 'L1.100',
        name: '-',
        visible: true,
        modes: [Mode.COOL, Mode.DRY, Mode.FAN, Mode.HEAT, Mode.AUTO],
        speeds: [Speed.LOW, Speed.MEDIUM, Speed.HIGH, Speed.AUTO],
        time: [null, null],
        coolRange: [new Temperature(20), new Temperature(24)],
        heatRange: [new Temperature(24), new Temperature(26)],
        lock: false
    },
    {
        uid: 'L1.101',
        name: '-',
        visible: true,
        modes: [Mode.COOL, Mode.DRY, Mode.FAN, Mode.HEAT, Mode.AUTO],
        speeds: [Speed.LOW, Speed.MEDIUM, Speed.HIGH, Speed.AUTO],
        time: [null, null],
        coolRange: [new Temperature(20), new Temperature(24)],
        heatRange: [new Temperature(24), new Temperature(26)],
        lock: false
    },
    {
        uid: 'L1.102',
        name: '-',
        visible: true,
        modes: [Mode.COOL, Mode.DRY, Mode.FAN, Mode.HEAT, Mode.AUTO],
        speeds: [Speed.LOW, Speed.MEDIUM, Speed.HIGH, Speed.AUTO],
        time: [null, null],
        coolRange: [new Temperature(20), new Temperature(24)],
        heatRange: [new Temperature(24), new Temperature(26)],
        lock: false
    },
    {
        uid: 'L1.103',
        name: '-',
        visible: true,
        modes: [Mode.COOL, Mode.DRY, Mode.FAN, Mode.HEAT, Mode.AUTO],
        speeds: [Speed.LOW, Speed.MEDIUM, Speed.HIGH, Speed.AUTO],
        time: [null, null],
        coolRange: [new Temperature(20), new Temperature(24)],
        heatRange: [new Temperature(24), new Temperature(26)],
        lock: false
    },
    {
        uid: 'L1.104',
        name: '-',
        visible: true,
        modes: [Mode.COOL, Mode.DRY, Mode.FAN, Mode.HEAT, Mode.AUTO],
        speeds: [Speed.LOW, Speed.MEDIUM, Speed.HIGH, Speed.AUTO],
        time: [null, null],
        coolRange: [new Temperature(20), new Temperature(24)],
        heatRange: [new Temperature(24), new Temperature(26)],
        lock: false
    },
    {
        uid: 'L7.010',
        name: 'Living Room',
        visible: true,
        modes: [Mode.COOL, Mode.DRY, Mode.FAN, Mode.HEAT],
        speeds: [Speed.VERY_LOW, Speed.LOW, Speed.MEDIUM, Speed.HIGH, Speed.TOP, Speed.AUTO],
        time: [null, null],
        coolRange: [new Temperature(20), null],
        heatRange: [null, new Temperature(26)],
        lock: false
    },
    {
        uid: 'L7.001',
        name: 'Dining Room 2',
        visible: false,
        modes: [Mode.COOL, Mode.DRY, Mode.FAN],
        speeds: [Speed.VERY_LOW, Speed.LOW, Speed.MEDIUM, Speed.HIGH, Speed.TOP],
        time: [null, null],
        coolRange: [null, null],
        heatRange: [null, null],
        lock: false
    },
    {
        uid: 'L7.000',
        name: 'Guest Unit',
        visible: true,
        modes: [Mode.COOL, Mode.DRY],
        speeds: [Speed.VERY_LOW, Speed.LOW, Speed.MEDIUM, Speed.HIGH],
        time: [null, null],
        coolRange: [null, null],
        heatRange: [null, null],
        lock: false
    },
    {
        uid: 'L7.008',
        name: 'Dining Room',
        visible: true,
        modes: [Mode.COOL],
        speeds: [Speed.VERY_LOW, Speed.LOW, Speed.MEDIUM],
        time: [null, null],
        coolRange: [null, null],
        heatRange: [null, null],
        lock: false
    },   
    {
        uid: 'L7.006',
        name: 'Playroom',
        visible: true,
        modes: [],
        speeds: [Speed.VERY_LOW, Speed.LOW],
        time: [null, null],
        coolRange: [null, null],
        heatRange: [null, null],
        lock: false
    },
    {
        uid: 'L7.009',
        name: 'Master',
        visible: true,
        modes: [Mode.COOL, Mode.HEAT, Mode.AUTO],
        speeds: [Speed.VERY_LOW],
        time: [null, null],
        coolRange: [null, null],
        heatRange: [null, null],
        lock: false
    },
    {
        uid: 'L7.005',
        name: 'Guest Room',
        visible: true,
        modes: [Mode.COOL, Mode.DRY, Mode.HEAT, Mode.AUTO],
        speeds: [],
        time: [null, null],
        coolRange: [null, null],
        heatRange: [null, null],
        lock: false
    },
    {
        uid: 'L7.002',
        name: 'Laundry Room',
        visible: true,
        modes: [Mode.COOL, Mode.DRY, Mode.HEAT, Mode.AUTO],
        speeds: [Speed.LOW, Speed.MEDIUM, Speed.HIGH, Speed.AUTO],
        time: [null, null],
        coolRange: [null, null],
        heatRange: [null, null],
        lock: false
    },
    {
        uid: 'L7.007',
        name: 'Kid\'s Room',
        visible: true,
        modes: [Mode.COOL, Mode.DRY, Mode.HEAT, Mode.AUTO],
        speeds: [Speed.LOW, Speed.MEDIUM, Speed.HIGH, Speed.AUTO],
        time: [null, null],
        coolRange: [null, null],
        heatRange: [null, null],
        lock: false
    },
    {
        uid: 'L7.004',
        name: 'Baby\'s Room',
        visible: true,
        modes: [Mode.COOL, Mode.DRY, Mode.HEAT, Mode.AUTO],
        speeds: [Speed.LOW, Speed.MEDIUM, Speed.HIGH, Speed.AUTO],
        time: [null, null],
        coolRange: [null, null],
        heatRange: [null, null],
        lock: false
    },
    {
        uid: 'L7.003',
        name: 'Kitchen',
        visible: true,
        modes: [Mode.COOL, Mode.DRY, Mode.HEAT, Mode.AUTO],
        speeds: [Speed.LOW, Speed.MEDIUM, Speed.HIGH, Speed.AUTO],
        time: [null, null],
        coolRange: [null, null],
        heatRange: [null, null],
        lock: false
    },
]