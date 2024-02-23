module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        ["module-resolver", {
            "root": ["./src"],
            extensions: [".ts", ".tsx", ".js", ".jsx"],
            alias: {
                "@assets": "./src/assets",
                "@components": "./src/components",
                "@config": "./src/condig",
                "@hooks": "./src/hooks",
                "@routes": "./src/routes",
                "@screens": "./src/screens",
                "@services": "./src/services",
                "@styles": "./src/styles",
                "@utils": "./src/utils",
            }
        }
        ]
    ],
};
