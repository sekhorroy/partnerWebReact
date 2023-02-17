// {
//     "presets": ["next/babel", "module:metro-react-native-babel-preset"],
//     "plugins": [
//         ["@babel/plugin-transform-react-jsx", {
//             "runtime": "automatic"
//         }]
//     ]
// }

module.exports = {
    presets: ['next/babel', 'module:metro-react-native-babel-preset'],
    plugins: [
        // // 'react-native-reanimated/plugin',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        [
            '@babel/plugin-proposal-class-properties',
            {
                loose: false
            }
        ],
    ],
    // plugins: [
    //     ["@babel/plugin-transform-react-jsx", {
    //         "runtime": "automatic"
    //     }]
    // ]
};
