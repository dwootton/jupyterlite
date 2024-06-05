from setuptools import setup, find_packages

setup(
    name='lite-extension',
    version='0.1.0',
    packages=find_packages(),
    include_package_data=True,
    data_files=[
        ('share/jupyter/labextensions/lite-extension', [
            'lite-lib/index.js'
        ])
    ],
    zip_safe=False,
    install_requires=[
        'jupyterlite',
        'jupyterlab'
    ],
    entry_points={},
)
