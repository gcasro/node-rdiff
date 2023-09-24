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
                                "<(module_root_dir)/lib-rsync-linux-x64/include/",
                            ],
                            "link_settings": {
                                "libraries": [
                                    "<(module_root_dir)/lib-rsync-linux-x64/bin/librsync.so"
                                ],
                            },
                            "copies=": [
                                {"destination": "build/Release/", "files": [
                                    "<(module_root_dir)/lib-rsync-linux-x64/bin/librsync.so",
                                ]}
                            ],
                        }]
                    ]
                }],
                ["OS=='win'", {
                    "conditions": [
                        ["target_arch=='x64'", {
                            "include_dirs": [
                                "<(module_root_dir)/lib-rsync-windows-x64/include/",
                            ],
                            "link_settings": {
                                "libraries": [
                                    "<(module_root_dir)/lib-rsync-windows-x64/lib/rsync.lib",
                                ],
                            },
                            "copies=": [
                                {"destination": "build/Release/", "files": [
                                    "<(module_root_dir)/lib-rsync-windows-x64/bin/rsync.dll",
                                ]}
                            ],
                        }]
                    ]
                }],
            ]
        }
    ]
}
