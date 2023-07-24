{
  description = "IEEE SB GECI nix flake : )";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };
        nodePkgs = import ./default.nix { };
      in
      rec {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodePkgs
            nodePackages_latest.typescript-language-server
          ];
        };
      }
    );
}
