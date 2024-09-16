import { AppTheme } from '../../../../../global/theme';

export const roadmapQuarters = [
  {
    title: "Phase 1",
    items: ["Development/Launch of quarrychain.network", "QuarryChain Seed Round"],
    color: AppTheme.colors.primary[0],
    number: 1
  },
  {
    title: "Phase 2",
    items: ["Development of QVM (Quarry Virtual Machine)", "QRC-20 Development & Testing","Development of QuarrySwap","Development of QuarryWallet","QuarryChain Private Sale", "Expanding the Quarry Labs Team"],
    color: AppTheme.colors.regular["darkRed"],
    number: 2
  },
  {
    title: "Phase 3",
    items: ["QuarryChain DPoS Network Launch", "QuarryChain Public Sale","First QuarryChain Delegate Voting Round",  "QRC-20 Launch", "QuarryWallet Launch", "Development of QuarryWallet Mobile App"],
    color: AppTheme.colors.regular["darkGreen"],
    number: 3
  },
  {
    title: "Phase 4",
    items: ["Further development on QuarrySwap’s Real World Marketplace", "Quarry Wallet Mobile App Launch",  "Expanding QuarryChain’s Ecosystem (DApps)"],
    color: AppTheme.colors.secondary[100],
    number: 4
  }
]