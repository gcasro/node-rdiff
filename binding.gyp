{
    "targets": [
        {
            "target_name": "rdiff",
            "sources": [
                "rdiff.cc"
            ],
            "include_dirs": [
                "<!(node -e \"require('nan')\")",
            ],
            'cflags': [
                '-Wno-cast-function-type'
            ],

            "conditions": [
                ["OS=='linux'", {
                    "conditions": [
                        ["target_arch=='x64'", {
                            "include_dirs": [
                                "lib-rsync-linux-x64/include",
                            ],
                            "link_settings": {
                                "libraries": ["-lrsync"],
                                "library_dirs": ["lib-rsync-linux-x64/lib"]
                            },
                            "copies=": [
                                {"destination": "build/Release", "files": [
                                    "lib-rsync-linux-x64/lib/librsync.so",
                                ]}
                            ],
                        }]
                    ]
                }],
            ]
        }
    ]
}
